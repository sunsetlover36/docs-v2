"use client";

import { cn } from "@/lib/utils";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion,
} from "../ui/accordion";
import { Heading } from "./Heading";

export function Details(props: {
	summary: React.ReactNode;
	children: React.ReactNode;
	level?: number;
	headingClassName?: string;
	id: string;
	flags?: string[];
}) {
	return (
		<Accordion type="multiple">
			<AccordionItem value="x" className="group my-4 border-none">
				<AccordionTrigger
					chevronPosition="left"
					className="flex border bg-b-700 px-4 py-1.5 pr-3 hover:border-f-300 group-data-[state='closed']:rounded-lg group-data-[state='open']:rounded-t-lg"
				>
					<Heading
						id={props.id}
						level={props.level || 5}
						anchorClassName="m-0 py-2"
						className={cn(
							"text-base md:text-base font-normal text-f-200 hover:text-f-100",
							props.headingClassName,
						)}
					>
						{props.summary}
					</Heading>

					{props.flags && (
						<div className="ml-auto">
							{props.flags?.map((flag) => {
								return (
									<span
										className="rounded-lg border bg-b-900 px-2 py-1 text-sm text-f-300"
										key={flag}
									>
										{flag}
									</span>
								);
							})}
						</div>
					)}
				</AccordionTrigger>
				<AccordionContent className="rounded-b-lg border-x border-b bg-b-900">
					<div className="px-4 pt-6">{props.children}</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}