"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/app/components/ui/dialog";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/components/ui/tabs";
import { Button } from "@/app/components/ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../validation/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "./ui/separator";
import { AlertComponent } from "./Alert";
import { Link } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export function AuthButton() {
  const [open, setOpen] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Дані форми:", data);
    // Відправка на сервер або інші дії
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Увійти
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log in to your account</DialogTitle>
          <DialogDescription>
            Enter your email address to log in to your account
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => {
                return (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Forgot your password? Click here and enter your email to
                        reset it.
                      </FormLabel>
                      <FormDescription>
                        A password reset link will be sent to your email.
                      </FormDescription>
                    </div>
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
        <Separator />
        <DialogFooter>
          {/* Кнопка Google */}
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5h-2V20H24v8h11.3C33.3 32.5 29.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l6-6C34.2 5.5 29.4 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.4-.1-2.7-.4-4z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14 16.5 18.6 14 24 14c3.1 0 5.9 1.2 8 3.1l6-6C34.2 5.5 29.4 3 24 3 15.5 3 8.1 8.2 6.3 14.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 45c5.2 0 9.8-1.8 13.5-4.8l-6.5-5.4C29.6 36.1 26.9 37 24 37c-5.1 0-9.4-3.2-11-7.7l-6.6 5.1C10.3 41.5 16.7 45 24 45z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5h-2V20H24v8h11.3c-1.3 3.7-4.4 6.7-8.3 7.8l6.5 5.4C38.9 37 43.6 31 43.6 24c0-1.3-.1-2.6-.4-3.5z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Кнопка Facebook */}
          <Button
            variant="outline"
            className=" flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 320 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                d="M279.14 288l14.22-92.66h-88.91V117.71c0-25.35 
        12.42-50.06 52.24-50.06h40.42V6.26S293.12 0 262.14 0C192.3
        0 150.2 39.17 150.2 111.18V195.3H67.49V288h82.71v224h100.2V288z"
              />
            </svg>
            Continue with Facebook
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
