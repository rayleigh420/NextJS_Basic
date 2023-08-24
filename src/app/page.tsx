"use client";

import { getTodo } from "@/apis/todoAPi";
import useSWR from "swr";
import "./page.css";
import TodoList from "@/components/TodoList";

export default function Home() {
	return <TodoList />;
}
