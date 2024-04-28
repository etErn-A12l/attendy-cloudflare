import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import axios from "axios";

const UserRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isStudent, setIsStudent] = useState(false);

  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [stream, setStream] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCheckboxChange = () => {
    setIsStudent(!isStudent);
  };

  async function onSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    const body = {
      fullName,
      gender,
      universityName,
      stream,
      admissionYear,
      email,
      password,
    };

    try {
      await axios.post("/api/register", {
        isTeacher: isStudent ? true : false,
        body,
      });
      alert("Successfully registered");
    } catch (error) {
      console.error(error);
      alert("Error registering");
    }
  }

  return (
    <div className={"grid gap-6"}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-4">
          <div className="grid gap-1">
            <div className="flex items-center justify-center space-x-2">
              <Switch
                id="check"
                checked={isStudent}
                onCheckedChange={handleCheckboxChange}
                className="data-[state=unchecked]:bg-gray-400"
              />
              <Label htmlFor="check">
                Create as {isStudent ? "Teacher" : "Student"}
              </Label>
            </div>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="Full Name"
              type="name"
              autoCapitalize="none"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="Gender">
              Gender
            </Label>
            <RadioGroup
              defaultValue="comfortable"
              className="flex flex-wrap px-2 justify-between"
              required
              value={gender}
              onValueChange={(e) => setGender(e)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="r1" />
                <Label htmlFor="r1">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="r2" />
                <Label htmlFor="r2">Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="others" id="r3" />
                <Label htmlFor="r3">Others</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoCorrect="off"
              required
              disabled={isLoading}
            />
          </div>

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="university-name">
              University Name
            </Label>
            <Input
              id="university-name"
              placeholder="University Name"
              type="text"
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
              autoCapitalize="none"
              autoCorrect="off"
              required
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="select-stream">
              Select Stream
            </Label>
            <Select required value={stream} onValueChange={(e) => setStream(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Stream" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Stream</SelectLabel>
                  <SelectItem value="internet-of-things">
                    Internet of Things
                  </SelectItem>
                  <SelectItem value="computer-science">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="blockchain-technology">
                    Blockchain Technology
                  </SelectItem>
                  <SelectItem value="cyber-security">Cyber Security</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {!isStudent ? (
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="admission-year">
                Admission Year
              </Label>
              <Input
                id="admission-year"
                placeholder="Admission Year"
                type="number"
                min={2000}
                max={2024}
                value={admissionYear}
                onChange={(e) => setAdmissionYear(e.target.value)}
                required
                autoCapitalize="none"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
          ) : null}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="password"
              required
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="confirm-password">
              Confirm Password
            </Label>
            <Input
              id="confirm-password"
              placeholder="Confirm Password"
              type="confirm-password"
              autoCapitalize="none"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="confirm-password"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="rounded-lg">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        className="border border-gray-400 rounded-lg"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  );
};

export default UserRegisterForm;
