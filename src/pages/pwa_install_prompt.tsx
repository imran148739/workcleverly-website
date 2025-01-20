import { useEffect, useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

declare global {
    interface BeforeInstallPromptEvent extends Event {
        prompt: () => void;
        userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
    }
}

export default function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (event: BeforeInstallPromptEvent) => {
            event.preventDefault();
            setDeferredPrompt(event);
            setOpen(true); // Show popup when prompt is available
        };

        window.addEventListener("beforeinstallprompt", handler);
        window.addEventListener("appinstalled", () => {
            console.log("PWA installed");
            setDeferredPrompt(null);
            setOpen(false);
        });

        return () => {
            window.removeEventListener("beforeinstallprompt", handler);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the install prompt");
                } else {
                    console.log("User dismissed the install prompt");
                }
                setDeferredPrompt(null);
                setOpen(false);
            });
        }
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Install PWA</DialogTitle>
            <DialogContent>Would you like to install this app?</DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleInstallClick} variant="contained">
                    Install
                </Button>
            </DialogActions>
        </Dialog>
    );
}