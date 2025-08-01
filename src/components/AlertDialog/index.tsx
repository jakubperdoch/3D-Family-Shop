import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@heroui/react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  isModalOpen?: boolean;
  onModalOpen?: () => void;
  title?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
};

export default function AlertDialog({
  children,
  className,
  isModalOpen = false,
  onModalOpen = () => {},
  title = "Alert",
  description = "Are you sure you want to proceed?",
  cancelText = "Cancel",
  confirmText = "Confirm",
  onConfirm = () => {},
  onClose = () => {},
}: Props) {
  return (
    <Modal
      backdrop="opaque"
      classNames={{
        backdrop: "bg-linear-to-t from-black to-black/80 backdrop-opacity-20",
        base: className,
      }}
      isOpen={isModalOpen}
      onOpenChange={onModalOpen || (() => {})}
      onClose={onClose || (() => {})}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold">{title}</h2>
              {description && (
                <p className="text-sm text-gray-600">{description}</p>
              )}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="ghost" onPress={onClose}>
                {cancelText}
              </Button>
              <Button
                color="primary"
                onPress={() => {
                  onConfirm();
                  onClose();
                }}
              >
                {confirmText}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
