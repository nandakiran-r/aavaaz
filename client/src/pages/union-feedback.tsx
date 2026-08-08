import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const departments = [
    "BA Economics", "BA English Language & Literature", "B.Sc. Mathematics", "B.Sc. Physics", "B.Sc. Chemistry",
    "B.Sc. Botany", "B.Sc. Zoology", "B.Sc. Psychology", "B.Com. (Finance)", "B.Sc. Economics and Mathematics (Double Major)",
    "BA Functional English & Psychology (Double Major)", "BA English Language & Literature (S.F)",
    "BA Journalism & Mass Communication", "BA Animation and Graphic Design", "B.Sc. Computer Science",
    "B.Sc. Applied Mathematics", "B.Com. Computer Application", "B.Com. Finance (S.F)", "B.Com. Professional",
    "B.Com. Applied Finance & Accounting with ACCA", "BBA Finance", "BBA International Business",
    "BBA Business Analytics", "BBA Sports Management", "BCA Data Science", "BCA AI & ML",
    "B.Sc. Computer Science & Mathematics (Double Major)", "BCA", "M A Economics", "M A English",
    "M A Malayalam", "M Com", "Msc Botany", "Msc Chemistry", "Msc Mathematics", "Msc Physics",
    "Msc Zoology", "Msc Psychology", "M S W", "Msc Computer Science", "Msc Statistics", "MCA"
];

const years = ["1st Year", "2nd Year", "3rd Year", "PG1", "PG2"];

const unionMembers = [
    { id: "chairman", name: "Chairman", person: "Muhammed Rabin PK" },
    { id: "viceChairperson", name: "Vice Chairperson", person: "Sreya EK" },
    { id: "generalSecretary", name: "General Secretary", person: "Christo Roy" },
    { id: "jointSecretary", name: "Joint Secretary", person: "Ann Mariya Benny" },
    { id: "fineArts", name: "Fine Arts Secretary", person: "Abin Babu" },
    { id: "generalCaptain", name: "General Captain", person: "Thejus Vivek" },
    { id: "uuc1", name: "UUC 1", person: "Ben Thomas" },
    { id: "uuc2", name: "UUC 2", person: "Muhammed Usman T K / Koyiloth" },
    { id: "magazineEditor", name: "Magazine Editor", person: "Khadeeja Kinshananth Beevi" },
];

const formSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    rollNumber: z.string().min(2, "Roll Number is required"),
    department: z.string({ required_error: "Department is required" }),
    year: z.string({ required_error: "Year is required" }),

    // Union Members Ratings
    ...Object.fromEntries(unionMembers.map(m => [m.id, z.string()])),

    // Inauguration
    attendedInauguration: z.enum(["yes", "no"], { required_error: "Please select an option" }),
    inaugurationOfficial: z.string().optional(),
    inaugurationStage: z.string().optional(),
    inaugurationCultural: z.string().optional(),
    inaugurationOverall: z.string().optional(),
    inaugurationSuggestions: z.string().optional(),

    // Lit Fest
    attendedLitFest: z.enum(["yes", "no"], { required_error: "Please select an option" }),
    litFestOfficial: z.string().optional(),
    litFestStage: z.string().optional(),
    litFestCultural: z.string().optional(),
    litFestLantern: z.string().optional(),
    litFestSuggestions: z.string().optional(),

    captcha: z.string().min(1, "Please complete the CAPTCHA"),
});

function RatingField({ control, name, label, description }: { control: any, name: string, label: string, description?: string }) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-3 bg-muted/30 p-4 rounded-lg">
                    <div className="flex flex-col gap-1">
                        <FormLabel className="text-base">{label}</FormLabel>
                        {description && <FormDescription>{description}</FormDescription>}
                    </div>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex justify-between max-w-xs"
                        >
                            {[1, 2, 3, 4, 5].map((val) => (
                                <FormItem key={val} className="flex flex-col items-center space-y-2 cursor-pointer">
                                    <FormControl>
                                        <RadioGroupItem value={val.toString()} />
                                    </FormControl>
                                    <FormLabel className="font-normal text-xs">{val}</FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <div className="flex justify-between max-w-xs text-xs text-muted-foreground px-1">
                        <span>Poor</span>
                        <span>Excellent</span>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default function UnionFeedbackPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            rollNumber: "",
            attendedInauguration: undefined,
            attendedLitFest: undefined,
            captcha: "",
        },
    });

    const attendedInauguration = form.watch("attendedInauguration");
    const attendedLitFest = form.watch("attendedLitFest");

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log(values);
            setIsSubmitting(false);
            toast({
                title: "Feedback Submitted",
                description: "Thank you for your valuable feedback!",
            });
            form.reset();
        }, 1500);
    }

    return (
        <PageLayout>
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-3xl mx-auto">
                    <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="font-display text-3xl">Union Feedback Form</CardTitle>
                            <CardDescription>
                                Evaluate the performance of Union Activities & Members. Your input helps us improve.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                    {/* Student Info */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold border-b pb-2">Student Information</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Full Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Your Name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="rollNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Roll Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g. 21ENG01" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="department"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Department</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select Department" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent className="max-h-[300px]">
                                                                {departments.map(dept => (
                                                                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="year"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Year of Study</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select Year" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {years.map(yr => (
                                                                    <SelectItem key={yr} value={yr}>{yr}</SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>

                                    {/* Union Members Performance */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold border-b pb-2">Union Member Performance</h3>
                                        <p className="text-sm text-muted-foreground mb-4">Rate the performance of each member on a scale of 1-5.</p>
                                        <div className="grid gap-6">
                                            {unionMembers.map((member) => (
                                                <RatingField
                                                    key={member.id}
                                                    control={form.control}
                                                    name={member.id}
                                                    label={member.name}
                                                    description={member.person}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Inauguration Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold border-b pb-2">Union Inauguration</h3>
                                        <FormField
                                            control={form.control}
                                            name="attendedInauguration"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel>Did you attend the Union Inauguration Programme?</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex gap-6"
                                                        >
                                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="yes" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">Yes</FormLabel>
                                                            </FormItem>
                                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="no" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">No</FormLabel>
                                                            </FormItem>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <AnimatePresence>
                                            {attendedInauguration === "yes" && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="space-y-4 overflow-hidden pt-2"
                                                >
                                                    <RatingField
                                                        control={form.control}
                                                        name="inaugurationOfficial"
                                                        label="Official Programme"
                                                        description="Guests, timing, flow, overall coordination"
                                                    />
                                                    <RatingField
                                                        control={form.control}
                                                        name="inaugurationStage"
                                                        label="Stage & Coordination"
                                                    />
                                                    <RatingField
                                                        control={form.control}
                                                        name="inaugurationCultural"
                                                        label="Cultural Programmes & Proshow"
                                                    />
                                                    <RatingField
                                                        control={form.control}
                                                        name="inaugurationOverall"
                                                        label="Overall Experience"
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="inaugurationSuggestions"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Suggestions for improvement</FormLabel>
                                                                <FormControl>
                                                                    <Textarea {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Lit Fest Section */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold border-b pb-2">Devagiri Literature Fest</h3>
                                        <FormField
                                            control={form.control}
                                            name="attendedLitFest"
                                            render={({ field }) => (
                                                <FormItem className="space-y-3">
                                                    <FormLabel>Did you attend the Devagiri Literature Fest?</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup
                                                            onValueChange={field.onChange}
                                                            defaultValue={field.value}
                                                            className="flex gap-6"
                                                        >
                                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="yes" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">Yes</FormLabel>
                                                            </FormItem>
                                                            <FormItem className="flex items-center space-x-2 space-y-0">
                                                                <FormControl>
                                                                    <RadioGroupItem value="no" />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">No</FormLabel>
                                                            </FormItem>
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <AnimatePresence>
                                            {attendedLitFest === "yes" && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="space-y-4 overflow-hidden pt-2"
                                                >
                                                    <RatingField
                                                        control={form.control}
                                                        name="litFestOfficial"
                                                        label="Official Programme"
                                                        description="Guests, timing, flow, overall coordination"
                                                    />
                                                    <RatingField
                                                        control={form.control}
                                                        name="litFestStage"
                                                        label="Stage & Coordination"
                                                    />
                                                    <RatingField
                                                        control={form.control}
                                                        name="litFestCultural"
                                                        label="Cultural Programmes & Ghazal"
                                                    />
                                                    <RatingField
                                                        control={form.control}
                                                        name="litFestLantern"
                                                        label="Lantern Show"
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="litFestSuggestions"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Suggestions for improvement</FormLabel>
                                                                <FormControl>
                                                                    <Textarea {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* CAPTCHA */}
                                    <FormField
                                        control={form.control}
                                        name="captcha"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <div className="flex justify-center md:justify-start">
                                                        <ReCAPTCHA
                                                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                                            onChange={(value) => field.onChange(value)}
                                                        />
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" size="lg" className="w-full font-bold" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            "Submit Feedback"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </PageLayout>
    );
}
