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
import { Hint } from "@/components/hint";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Hint label="Create organization" side="right" align="start" sideOffset={18}>
                    <div className="aspect-square">
                        <button className="bg-white/25 rounded-md w-full h-full flex items-center justify-center">
                            <Plus />
                        </button>
                    </div>
                </Hint>
            </DialogTrigger>
            <DialogContent className="border-none bg-transparent shadow-none p-0 max-w-[430px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    );
};