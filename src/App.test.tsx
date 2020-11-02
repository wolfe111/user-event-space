import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

it('should show an error when an email is typed with a space and submitted', async () => {
  const emailAddress = 'some{space}email@example.com'

  render(<App/>);

  const emailField = screen.getByLabelText('Email');
  await userEvent.type(emailField, emailAddress);
  userEvent.click(screen.getByText('Enter email'));

  await waitFor(() => {
    expect(screen.queryByText('No email errors')).not.toBeInTheDocument()
    expect(screen.queryByText('Email has white space')).toBeInTheDocument()
  })
});

it('should submit an email', async () => {
  const emailAddress = 'someemail@example.com'

  render(<App/>);

  const emailField = screen.getByLabelText('Email');
  await userEvent.type(emailField, emailAddress);
  userEvent.click(screen.getByText('Enter email'));

  await waitFor(() => {
    expect(screen.queryByText('No email errors')).toBeInTheDocument()
    expect(screen.queryByText('Email has white space')).not.toBeInTheDocument()
  })
});