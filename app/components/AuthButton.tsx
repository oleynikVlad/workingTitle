"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/components/ui/tabs";
import { Button } from "@/app/components/ui/button";
import { Input } from "./ui/input";

export function AuthButton() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Увійти
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ласкаво просимо</DialogTitle>
        </DialogHeader>

        {/* Tabs всередині діалогу */}
        <Tabs defaultValue="login" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Увійти</TabsTrigger>
            <TabsTrigger value="register">Реєстрація</TabsTrigger>
          </TabsList>

          {/* Вкладка Увійти */}
          <TabsContent value="login">
            <form className="space-y-4 mt-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button type="submit" className="w-full">
                Увійти
              </Button>
            </form>
          </TabsContent>

          {/* Вкладка Реєстрація */}
          <TabsContent value="register">
            <form className="space-y-4 mt-4">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button type="submit" className="w-full">
                Зареєструватись
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
