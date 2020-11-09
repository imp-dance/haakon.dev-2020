import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../buttons/Button";
import constants from "../../../styles/constants";
import { fadeInDown } from "../../../styles/animations";
const { colors, whitespace, typography } = constants;

const GetInTouch: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Get in touch</Button>
      <Modal open={open} close={() => setOpen(false)} />
    </>
  );
};

interface ModalProps {
  open: boolean;
  close?: () => void;
}

let hto = setTimeout(() => {});

const Modal: React.FC<ModalProps> = ({ open, close }) => {
  const [fd, setFormData] = useState({
    name: "",
    reply_to: "",
    message: "",
  });

  const [fs, setFormState] = useState<
    "idle" | "notCompleted" | "resolved" | "loading"
  >("idle");

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      close && close();
    }
  };

  const setState = (key: string, value: string) => {
    setFormState("idle");
    setFormData({ ...fd, [key]: value });
  };

  const resolve = () => {
    setFormState("resolved");
    hto = setTimeout(() => {
      close && close();
    }, 2000);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fd.name && fd.message && fd.reply_to) {
      console.log("fetching...");
      setFormState("loading");
      fetch(
        "https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(fd),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("Successful response from server: ", res);
          resolve();
        })
        .catch((err) => {
          console.error("Unsuccessful response from server: ", err);
          resolve();
        });
    } else {
      setFormState("notCompleted");
    }
    return;
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      setFormState("idle");
      setFormData({
        name: "",
        reply_to: "",
        message: "",
      }); // reset
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line
  }, [open]);

  useEffect(() => () => clearTimeout(hto), []);

  return (
    <>
      <Backdrop open={open} onClick={close}>
        <ModalContainer open={open} onClick={(e) => e.stopPropagation()}>
          {open && (
            <FormContainer>
              <form
                action="https://ewxpkphj05.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer"
                onSubmit={onSubmit}
                autoComplete="off"
              >
                {fs === "notCompleted" && (
                  <InfoMessage>Please fill out the entire form</InfoMessage>
                )}
                {fs === "resolved" && (
                  <InfoMessage>Message received!</InfoMessage>
                )}
                <label>
                  Name
                  <input
                    type="text"
                    value={fd.name}
                    onChange={(e) => setState("name", e.target.value)}
                    autoComplete="false"
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="text"
                    value={fd.reply_to}
                    onChange={(e) => setState("reply_to", e.target.value)}
                    autoComplete="false"
                    required
                  />
                </label>
                <label>
                  Message
                  <textarea
                    value={fd.message}
                    onChange={(e) => setState("message", e.target.value)}
                    required
                  />
                </label>
                <Button
                  onClick={onSubmit}
                  disabled={
                    fs === "resolved" ||
                    fs === "notCompleted" ||
                    fs === "loading"
                  }
                >
                  {fs === "resolved"
                    ? "Gotcha, thanks!"
                    : fs === "loading"
                    ? "Sending..."
                    : "Holla' at me!"}
                </Button>
              </form>
              <Button onClick={close} secondary>
                Cancel
              </Button>
            </FormContainer>
          )}
        </ModalContainer>
      </Backdrop>
    </>
  );
};

const InfoMessage = styled.div`
  background: ${colors.primary};
  padding: ${whitespace.s};
  margin-bottom: ${whitespace.m};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${whitespace.m};
  animation: ${fadeInDown} 0.2s ease-in-out;
  &:before,
  &:after {
    content: "";
    flex: 1;
    background: linear-gradient(
      to right,
      ${colors.primary},
      ${colors.lightPink}
    );
    height: 0.1em;
    margin: 0.2em;
    border-radius: 5px;
    opacity: 0.3;
  }
  &:after {
    background: linear-gradient(
      to left,
      ${colors.primary},
      ${colors.lightPink}
    );
  }
`;

const Backdrop = styled.div<ModalProps>`
  position: fixed;
  background: ${colors.bgDark}ee;
  opacity: ${(props) => (props.open ? "1" : "0")};
  pointer-events: ${(props) => (props.open ? "all" : "none")};
  transition: all 0.2s ease-in-out;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  place-content: center;
  z-index: 15;
  cursor: pointer;
`;
const ModalContainer = styled.div<ModalProps>`
  transition: all 0.2s ease-in-out;
  background: ${colors.bg};
  transform: ${(props) =>
    props.open ? `translate(0px, 0px)` : `translate(0px, 20px) scale(0.9)`};
  cursor: default;
  overflow: hidden;
  overflow: auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${whitespace.l};
  min-width: 500px;
  @media screen and (max-width: 500px) {
    min-width: 100%;
  }
  button {
    border-radius: 0px;
    border: none !important;
    cursor: pointer;
  }
  iframe {
    max-width: 100% !important;
    color: ${colors.beige};
    background: ${colors.gray};
    max-height: calc(100vh - 100px);
  }
  form,
  form label {
    display: flex;
    flex-direction: column;
  }
  form {
    label {
      color: ${colors.beige};
      margin-bottom: ${whitespace.m};
      font-size: ${typography.s};
      input,
      textarea {
        font-size: ${typography.m};
        padding: ${whitespace.s};
        font-family: "IBM Plex Mono", monospace;
        border: 2px solid ${colors.primary};
      }
      textarea {
        min-height: 150px;
        resize: vertical;
        max-height: 300px;
      }
    }
    button {
      margin-bottom: ${whitespace.m} !important;
    }
  }
`;

export default GetInTouch;
