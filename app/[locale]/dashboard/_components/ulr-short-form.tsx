"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { urlSchema, UrlSchemaType } from "@/validation/url.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AudioLines, Link, Loader, XIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewUrlShort } from "../actions/urls.actions";

const UrlShortForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      orginalUrl: "",
      shortCode: "",
      expiresAt: undefined,
      title: "",
      description: "",
      isActive: true,
    },
  });

  const onSubmit = async (data: UrlSchemaType) => {
    try {
      setIsLoading(true);
      const res = await createNewUrlShort(data);
      if (!res || !res.success) {
        setError(res?.message || "Something went wrong");
        return;
      }
      form.reset();
      setError("");
    } catch (error) {
      setError("Someting went wrong. please try again later.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateCode = () => {
    const randomCode = Math.random().toString(36).substring(2, 8);
    form.setValue("shortCode", randomCode, { shouldValidate: true });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border p-4 py-6 my-4 flex flex-col gap-6 rounded-sm max-w-3xl mx-auto"
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} placeholder="title" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description (optional)</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder="type here" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="orginalUrl"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Orignal Url</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="paste your orginal url"
                  type="url"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="shortCode"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Short Code</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  <Input
                    {...field}
                    placeholder="click generate to create a code"
                    type="text"
                    className="w-full"
                    disabled
                  />
                  <Button
                    type="button"
                    onClick={generateCode}
                    variant={"outline"}
                    disabled={isLoading}
                  >
                    <AudioLines /> Generate
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {error && (
            <Alert variant="soft">
              <XIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
        <Button disabled={isLoading} type="submit">
          {isLoading ? (
            <>
              <Loader className="animate-spin" /> Creating...
            </>
          ) : (
            <>
              <Link /> Create Short URL
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default UrlShortForm;
