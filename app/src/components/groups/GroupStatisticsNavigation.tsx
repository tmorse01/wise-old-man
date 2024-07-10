"use client";

import Link from "next/link";
import { ToggleTabs, ToggleTabsList, ToggleTabsTrigger } from "../ToggleTabs";
import { usePathname } from "next/navigation";

interface GroupStatisticsNavigationProps {
  id: number;
}

export function GroupStatisticsNavigation(props: GroupStatisticsNavigationProps) {
  const { id } = props;

  const pathname = usePathname();
  const selectedSegment = pathname.split("/").at(-1) || undefined;
  const defaultSegment = selectedSegment ?? "statistics";
  return (
    <ToggleTabs defaultValue={defaultSegment}>
      <ToggleTabsList>
        <Link prefetch={false} href={`/groups/${id}/statistics`} className="border-r border-gray-400">
          <ToggleTabsTrigger value="statistics">Average Stats</ToggleTabsTrigger>
        </Link>
        <Link prefetch={false} href={`/groups/${id}/statistics/best`}>
          <ToggleTabsTrigger value="best">Best Players</ToggleTabsTrigger>
        </Link>
        <Link prefetch={false} href={`/groups/${id}/statistics/charts`}>
          <ToggleTabsTrigger value="charts">Charts</ToggleTabsTrigger>
        </Link>
      </ToggleTabsList>
    </ToggleTabs>
  );
}
