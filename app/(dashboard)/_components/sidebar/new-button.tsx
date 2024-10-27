"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <button className="bg-white/25 rounded-md w-full h-full flex items-center justify-center">
                        <Plus/>
                    </button>
                </div>
            </DialogTrigger>
        </Dialog>
    );
};