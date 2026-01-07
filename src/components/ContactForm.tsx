import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = ({ onSuccess }: { onSuccess?: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            service: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/mbdlnggz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success("Message received! We'll signal back shortly. 🛰️");
                form.reset();
                if (onSuccess) onSuccess();
            } else {
                toast.error("Transmission failed. Please try again.");
            }
        } catch (error) {
            toast.error("Connection error. Check your frequency.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Identify Yourself</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Jane Doe"
                                    {...field}
                                    className="bg-zinc-900/50 border-white/10 focus:border-primary/50 text-white placeholder:text-zinc-600"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Comm Frequency (Email)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="jane@example.com"
                                        {...field}
                                        className="bg-zinc-900/50 border-white/10 focus:border-primary/50 text-white placeholder:text-zinc-600"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Mission Objective</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="bg-zinc-900/50 border-white/10 focus:border-primary/50 text-zinc-300">
                                            <SelectValue placeholder="Select Service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-zinc-900 border-white/10 text-zinc-300">
                                        <SelectItem value="web-design">Web Design</SelectItem>
                                        <SelectItem value="web-development">Web Development</SelectItem>
                                        <SelectItem value="full-package">Full Package</SelectItem>
                                        <SelectItem value="other">Other Inquiry</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-zinc-400 font-mono text-xs uppercase tracking-widest">Transmission Data</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about your project..."
                                    className="resize-none min-h-[120px] bg-zinc-900/50 border-white/10 focus:border-primary/50 text-white placeholder:text-zinc-600"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Honeypot field for bots - Formspree will ignore submission if this is filled */}
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wide py-6 text-lg"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Transmitting...
                        </>
                    ) : (
                        <>
                            Init Launch Sequence <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
