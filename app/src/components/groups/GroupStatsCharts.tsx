"use client";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../Select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../Card";

export function GroupStatsCharts() {
  const [selectedSkill, setSelectedSkill] = useState("attack");
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("1month");

  const handleSkillChange = (value: string) => {
    setSelectedSkill(value);
  };
  const handleTimePeriodChange = (value: string) => {
    setSelectedTimePeriod(value);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Player Skill Statistics by Time</h1>
        <div className="flex items-center space-x-4">
          <Select value={selectedSkill} onValueChange={handleSkillChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="attack">Attack</SelectItem>
                <SelectItem value="strength">Strength</SelectItem>
                <SelectItem value="defense">Defense</SelectItem>
                <SelectItem value="ranged">Ranged</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select value={selectedTimePeriod} onValueChange={handleTimePeriodChange}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1week">Last 1 Week</SelectItem>
                <SelectItem value="1month">Last 1 Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Card className="h-full w-full max-w-4xl">
        <CardHeader>
          <CardTitle>
            {selectedSkill.charAt(0).toUpperCase() + selectedSkill.slice(1)} Skill XP Comparison
          </CardTitle>
          <CardDescription>
            Comparing the XP gained in the {selectedSkill} skill by the top 4 players during the last{" "}
            {selectedTimePeriod}.
          </CardDescription>
        </CardHeader>
        <CardContent>{/* <BarchartChart className="aspect-[4/3]" data={chartData} /> */}</CardContent>
      </Card>
    </div>
  );
}
