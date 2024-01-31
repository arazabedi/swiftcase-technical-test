"use client"

// Import necessary dependencies and components
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormItem, FormField, FormControl, FormLabel, FormDescription, FormMessage } from '@/components/ui/form';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useState } from 'react';
import Modal from './modal';
import { Input } from "@/components/ui/input"

// Define a type for an array of tasks with ids
type TaskArray = {
	id: number;
}[];

// Define a Zod schema for form validation
const formSchema: z.Schema = z.object({
	productStatusID: z.string().refine(value => value.trim() !== '', {
		message: 'Product Status ID is required',
	}).refine(value => Number.isInteger(Number(value)), {
		message: 'Product Status ID must be an integer',
	}),
});

// Main functional component for the product form
export default function ProductForm() {
	let [isOpen, setIsOpen] = useState(false)

	// State variables for controlling modal and storing calculated values
	const [formattedSum, setFormattedSum] = useState<string>("")
	const [nonCancelledDates, setnonCancelledDates] = useState<number[]>([])

	// Form definition using react-hook-form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			// Defaulted for the purposes of this challenge
			productStatusID: "1043"
		}
	})

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	// Function to fetch details for a list of task IDs
	function requestDetails(taskIds: TaskArray) {
		// Use map to create an array of promises for fetching task details
		const requests = taskIds.map((item) =>
			axios.get(
				`https://demonstration.swiftcase.co.uk/api/v2/${process.env.NEXT_PUBLIC_SWIFTCASE_API_KEY}/task/${item.id}.json`
			)
		);

		// Use Promise.all to wait for all promises to resolve
		return Promise.all(requests)
		// Extract and return task details from the responses
			.then((responses: AxiosResponse[]) => {
				const taskDetails = responses.map((response) => response.data);
				return taskDetails;
			})
			.catch((error: AxiosError) => {
				// Handle errors here if needed
				console.log(error);
				return [];
			});
	}

// Async function to handle form submission
async function onSubmit(values: z.infer<typeof formSchema>): Promise<void> {
  try {
    // Fetch data based on the provided productStatusID
    const response = await axios.get(
      `https://demonstration.swiftcase.co.uk/api/v2/${process.env.NEXT_PUBLIC_SWIFTCASE_API_KEY}/status/${values.productStatusID}.json`
    );

    // Extract object with taskIds from the response
    const taskIdObject = response.data;

    // Fetch details for each task ID
    const taskDetails = await requestDetails(taskIdObject.task_ids);

    // Calculate sum and collect non-cancelled dates
    let sum = 0;
    let dateArray: number[] = [];

    taskDetails.forEach((x) => {
      // Check if x.data[2] is defined, x.data[2].value is a string, and its value is "No"
      if (x.data[2] && typeof x.data[2].value === "string" && x.data[2].value === "No") {
        // Accumulate the sum by converting x.data[0].value to a number
        sum += Number(x.data[0].value);

        // Create a Date object from x.data[1].value and push its timestamp to dateArray
        let dateObject = new Date(x.data[1].value);
        dateArray.push(dateObject.getTime());
      }
    });

    // Format and set the sum value
    const formattedSum = "£" + (sum !== null && sum !== undefined ? sum.toString() : "") + ".00";
    setFormattedSum(formattedSum);
    setnonCancelledDates(dateArray);

    // Log nonCancelledDates and formattedSum to the console
    console.log(nonCancelledDates);
    console.log(formattedSum);

    // Open the modal to display the results
    openModal();
  } catch (error) {
    // Handle errors during form submission
    console.error("Error during form submission:", error);
  }
}

	// JSX for rendering the component
	return (
		<>
			<Modal isOpen={isOpen} closeModal={closeModal} formattedSum={formattedSum} nonCancelledDates={nonCancelledDates} />
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="productStatusID"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Product Status ID</FormLabel>
								<FormControl>
									<Input placeholder="Enter a product status id..." {...field} />
								</FormControl>
								<FormDescription>
									Displays the total cost of non-cancelled orders and the unix timestamps
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</>
	);
}
