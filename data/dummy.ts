import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "24",
  "folder": "24-revform-studio",
  "appName": "RevForm Studio",
  "domain": "Form Builder",
  "heroHeadline": "Collect data without writing code",
  "heroSubtitle": "Build beautiful forms, share them instantly, and analyze the responses from a simple dashboard.",
  "features": [
    {
      "icon": "LayoutTemplate",
      "title": "Drag-and-Drop Builder",
      "description": "Create complex forms visually in minutes."
    },
    {
      "icon": "Share2",
      "title": "Easy Sharing",
      "description": "Embed on your website or share via direct link."
    },
    {
      "icon": "BarChartHorizontal",
      "title": "Response Analytics",
      "description": "View incoming data in clean tables and charts."
    },
    {
      "icon": "BellRing",
      "title": "Instant Notifications",
      "description": "Get alerted via email when someone submits your form."
    }
  ],
  "stats": [
    {
      "label": "Active Forms",
      "value": "14",
      "trend": "+2"
    },
    {
      "label": "Total Responses",
      "value": "8,450",
      "trend": "+120"
    },
    {
      "label": "Views Today",
      "value": "342",
      "trend": "+15%"
    },
    {
      "label": "Conversion Rate",
      "value": "45.2%",
      "trend": "+2.1%"
    }
  ],
  "tableColumns": [
    {
      "key": "form_name",
      "label": "Form Name"
    },
    {
      "key": "responses",
      "label": "Responses"
    },
    {
      "key": "created",
      "label": "Created"
    },
    {
      "key": "last_response",
      "label": "Last Response"
    },
    {
      "key": "status",
      "label": "Status"
    }
  ],
  "tableRows": [
    {
      "id": "FRM-001",
      "form_name": "Customer Satisfaction Survey",
      "responses": "1,245",
      "created": "2026-01-10",
      "last_response": "10 mins ago",
      "status": "Active"
    },
    {
      "id": "FRM-002",
      "form_name": "Event Registration: Q3 Summit",
      "responses": "850",
      "created": "2026-03-15",
      "last_response": "1 hour ago",
      "status": "Active"
    },
    {
      "id": "FRM-003",
      "form_name": "Job Application: Frontend Dev",
      "responses": "145",
      "created": "2026-04-01",
      "last_response": "3 hours ago",
      "status": "Active"
    },
    {
      "id": "FRM-004",
      "form_name": "Internal Employee Feedback",
      "responses": "42",
      "created": "2026-04-20",
      "last_response": "1 day ago",
      "status": "Draft"
    },
    {
      "id": "FRM-005",
      "form_name": "Product Beta Waitlist",
      "responses": "5,400",
      "created": "2025-11-20",
      "last_response": "2 months ago",
      "status": "Closed"
    },
    {
      "id": "FRM-006",
      "form_name": "Website Contact Us",
      "responses": "320",
      "created": "2026-02-05",
      "last_response": "5 mins ago",
      "status": "Active"
    },
    {
      "id": "FRM-007",
      "form_name": "2025 Market Research",
      "responses": "448",
      "created": "2025-08-10",
      "last_response": "6 months ago",
      "status": "Archived"
    },
    {
      "id": "FRM-008",
      "form_name": "Newsletter Signup Template",
      "responses": "0",
      "created": "2026-04-25",
      "last_response": "Never",
      "status": "Draft"
    }
  ],
  "statuses": [
    "Active",
    "Draft",
    "Closed",
    "Archived"
  ],
  "ctaHeadline": "Stop fighting with HTML forms",
  "ctaSubtitle": "Build your first form in minutes and start collecting responses.",
  "ctaButtonText": "Create New Form",
  "readmeDescription": "A SaaS dashboard for managing custom forms, tracking submissions, and viewing response metrics.",
  "readmeFeaturesList": [
    "Form configuration listing",
    "Submission statistics",
    "Active/Draft/Closed statuses",
    "Analytics-focused UI"
  ],
  "theme": {
    "heroLayout": "split",
    "navStyle": "solid-dark",
    "cardStyle": "lift",
    "primary": "#4338ca",
    "secondary": "#6366f1",
    "accent": "#eef2ff",
    "background": "#fafafa",
    "text": "#312e81",
    "heroGradient": "linear-gradient(135deg, rgba(67, 56, 202, 0.98) 0%, rgba(99, 102, 241, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(99, 102, 241, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(238, 242, 255, 0.14) 0%, transparent 28%)",
    "surface": "rgba(67, 56, 202, 0.05)",
    "surfaceStrong": "rgba(67, 56, 202, 0.08)",
    "border": "rgba(67, 56, 202, 0.12)",
    "borderStrong": "rgba(67, 56, 202, 0.22)",
    "softText": "rgba(49, 46, 129, 0.72)",
    "primarySoft": "rgba(67, 56, 202, 0.12)",
    "secondarySoft": "rgba(99, 102, 241, 0.12)",
    "secondaryStrong": "rgba(99, 102, 241, 0.18)",
    "accentSoft": "rgba(238, 242, 255, 0.8)"
  }
};
