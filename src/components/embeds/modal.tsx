import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { EmbedModalProps } from "../../constants/type";

const EmbedModal: React.FC<EmbedModalProps> = ({
  isOpen,
  toggle,
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const createElement = (element: string, className?: string): HTMLElement => {
    const newElement = document.createElement(element);
    newElement.className = className ?? "";
    return newElement;
  };

  useEffect(() => {
    if (isOpen) {
      const modalRoot = createElement("div", "embed-modal-root");
      document.body.appendChild(modalRoot);
      setOpen(true);
    } else {
      document.getElementsByClassName("embed-modal-root")[0]?.remove();
      setOpen(false);
    }

    return () => {
      if (open) {
        document.getElementsByClassName("embed-modal-root")[0]?.remove();
        setOpen(false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  return open
    ? createPortal(
        <div className="modal-box">
          <div className="modal-header">
            <h3>Embed</h3>
            <button onClick={toggle}>&times;</button>
          </div>
          <div className="modal-content">{children}</div>
        </div>,
        document.getElementsByClassName("embed-modal-root")[0]
      )
    : null;
};

export default EmbedModal;
