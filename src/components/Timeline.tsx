import type { JSX } from "react";
import type React from "react";
import { memo } from "react";

interface TimelineItemProps {
	jobTitle: string;
	isEducation?: boolean;
	company: string;
	dateFrom: string;
	dateTo: string;
	description: JSX.Element | string;
	isLatest?: boolean;
}

const EducationIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-label="Education"
	>
		<path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
		<path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
	</svg>
);

const WorkIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-label="Work experience"
	>
		<path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
		<path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
	</svg>
);

const TimelineItem: React.FC<TimelineItemProps> = memo(({
	jobTitle,
	isEducation = false,
	company,
	dateFrom,
	dateTo,
	description,
	isLatest = false,
}) => (
	<li className="mb-10 ms-6">
		<span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-4 ring-slate-300">
			{isEducation ? <EducationIcon /> : <WorkIcon />}
		</span>
		<div className="ml-2">
			<h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900">
				{jobTitle} - {company}
				{isLatest && (
					<span className="ml-3 rounded-full bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
						Current
					</span>
				)}
			</h3>
			<time className="mb-2 block text-sm font-normal leading-none text-gray-600">
				{dateFrom} - {dateTo}
			</time>
			<div className="text-base font-normal text-gray-700 leading-relaxed">
				{description}
			</div>
		</div>
	</li>
));

export default TimelineItem;
