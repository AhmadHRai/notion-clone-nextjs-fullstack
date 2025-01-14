"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useSettings } from "@/hooks/use-settings";
import { APP_NAME } from "@/lib/constants";
import { ModeToggle } from "../mode-toggle";

export function SettingsModal() {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogTitle>
          <DialogHeader className="border-b pb-3">
            <h2 className="text-lg font-medium">My Settings</h2>
          </DialogHeader>
        </DialogTitle>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how {APP_NAME} looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
}
