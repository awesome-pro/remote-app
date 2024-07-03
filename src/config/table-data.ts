import { Job } from "@/app/(root)/jobs/column";

export const jobs: Job[] = [
    {
      id: "1",
      company: "Google",
      avatar: "/icons/google.svg",
      companyLink: "https://google.com",
      role: "Software Engineer",
      status: "active",
      date: new Date(),
      type: "Full-time",
      tag: "New",
      minSalary: 100000,
      maxSalary: 200000,
    location: "Mountain View, CA",
      applyStatus: "not-applied",
    },
    {
      id: "2",
      company: "Facebook",
      avatar: "/icons/meta.svg",
      companyLink: "https://facebook.com",
      role: "Product Manager",
      status: "inactive",
      date: new Date(),
      type: "Part-time",
      tag: "Featured",
      minSalary: 80000,
        maxSalary: 150000,
      location: "Menlo Park, CA",
      applyStatus: "not-applied",
    },
    {
      id: "3",
      company: "Amazon",
      avatar: "/icons/amazon.svg",
      companyLink: "https://amazon.com",
      role: "Data Scientist",
      status: "active",
      date: new Date(),
      type: "Contract",
      tag: "Urgent",
      minSalary: 90000,
        maxSalary: 180000,
      location: "Seattle, WA",
      applyStatus: "not-applied",
    },
    {
      id: "4",
      company: "Microsoft",
      avatar: "/icons/microsoft.svg",
      companyLink: "https://microsoft.com",
      role: "Software Engineer",
      status: "completed",
      date: new Date(),
      type: "Internship",
      tag: "Hot",
        minSalary: 95000,
      location: "Redmond, WA",
      applyStatus: "not-applied",
    },
    {
      id: "5",
      company: "Apple",
      avatar: "/icons/apple.svg",
      companyLink: "https://apple.com",
      role: "Product Designer",
      status: "active",
      date: new Date(),
      type: "Full-time",
      tag: "Recommended",
      minSalary: 85000,
        maxSalary: 160000,
      location: "Cupertino, CA",
      applyStatus: "not-applied",
    },
    {
      id: "6",
      company: "Netflix",
      avatar: "/icons/netflix.svg",
      companyLink: "https://netflix.com",
      role: "Content Creator",
      status: "inactive",
      date: new Date(),
      type: "Part-time",
      minSalary: 75000,
        maxSalary: 140000,
      location: "Los Gatos, CA",
      applyStatus: "applied",
    },
    {
      id: "7",
      company: "Tesla",
      avatar: "/icons/tesla.svg",
      companyLink: "https://tesla.com",
      role: "Electrical Engineer",
      status: "inactive",
      date: new Date(),
      type: "Contract",
      minSalary: 80000,
        maxSalary: 150000,
      location: "Palo Alto, CA",
      applyStatus: "not-applied",
    },
    {
      id: "8",
      company: "Twitter",
      avatar: "/icons/twitter.svg",
      companyLink: "https://twitter.com",
      role: "Social Media Manager",
      status: "completed",
      date: new Date(),
      type: "Internship",
      minSalary: 75000,
        maxSalary: 140000,
      location: "San Francisco, CA",
      applyStatus: "interview",
    },
  ];
  