import { motion } from "framer-motion";
import { Link } from "wouter";
import { MessageSquarePlus, Users, Lightbulb } from "lucide-react";
import PageLayout from "@/components/page-layout";
import { Card } from "@/components/ui/card";

export default function AppPage() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <PageLayout>
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        How would you like to <span className="text-primary">contribute?</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Choose an option below to make your voice heard on campus. All submissions are secure and anonymous.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    <Link href="/submit-a-complaint">
                        <motion.div variants={item} whileHover={{ scale: 1.03 }} className="cursor-pointer h-full">
                            <Card className="h-full p-8 flex flex-col items-center text-center gap-6 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm border-2">
                                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                                    <MessageSquarePlus className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold mb-2">Submit a Complaint</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Report issues regarding facilities, academics, or other grievances securely.
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    </Link>

                    <Link href="/union-feedback">
                        <motion.div variants={item} whileHover={{ scale: 1.03 }} className="cursor-pointer h-full">
                            <Card className="h-full p-8 flex flex-col items-center text-center gap-6 hover:border-secondary/50 transition-colors bg-card/50 backdrop-blur-sm border-2">
                                <div className="p-4 rounded-2xl bg-secondary/10 text-secondary">
                                    <Users className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold mb-2">Union Feedback</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Rate and review the performance of the College Union and its members.
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    </Link>

                    <Link href="/suggest-ideas">
                        <motion.div variants={item} whileHover={{ scale: 1.03 }} className="cursor-pointer h-full">
                            <Card className="h-full p-8 flex flex-col items-center text-center gap-6 hover:border-green-500/50 transition-colors bg-card/50 backdrop-blur-sm border-2">
                                <div className="p-4 rounded-2xl bg-green-500/10 text-green-600">
                                    <Lightbulb className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold mb-2">Suggest Ideas</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Have an idea for an event or improvement? Let us know your suggestions.
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </PageLayout>
    );
}
