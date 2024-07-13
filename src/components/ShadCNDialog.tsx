/*  2024-07-13 12:20:04


*/

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

type ShadCNDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const ShadCNDialog = ({ open, onOpenChange }: ShadCNDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              veritatis facilis atque neque culpa, nemo porro cum velit non
              similique ex qui excepturi tempore inventore! Cumque in qui ad
              consectetur!
            </p>
            <p>
              Dialog 는 아무래도 쓸만한 수준이 되지 못하는 것 같다. open
              트리거가 무조건 Dialog 컴포넌트 안에 위치해야 한다는 건데, 바보도
              아니고... 이벤트로부터 Dialog 를 활성화 해야 할 필요도 있을텐데..
              이건 좀 아닌 것 같다. react.portal 으로 사설 컴포넌트를 만들어서
              사용하는 게 지금까지는 최선인 것 같다.
            </p>
            <p>ShadCN Dialog 는 버리고 감</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShadCNDialog;
