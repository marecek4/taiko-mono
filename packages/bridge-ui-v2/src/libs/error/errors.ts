export class NotConnectedError extends Error {
  name = 'NotConnectedError';
}

export class TokenMintedError extends Error {
  name = 'TokenMintedError';
}

export class InsufficientBalanceError extends Error {
  name = 'InsufficientBalanceError';
}

export class InsufficientAllowanceError extends Error {
  name = 'InsufficientAllowanceError';
}

export class NoAllowanceRequiredError extends Error {
  name = 'NoAllowanceRequiredError';
}

export class NoTokenAddressError extends Error {
  name = 'NoTokenAddressError';
}

export class FailedTransactionError extends Error {
  name = 'FailedTransactionError';
}

export class SendMessageError extends Error {
  name = 'SendMessageError';
}

export class SendERC20Error extends Error {
  name = 'SendERC20Error';
}

export class ApproveError extends Error {
  name = 'ApproveError';
}

export class RevertedWithFailedError extends Error {
  name = 'RevertedWithFailedError';
}

export class MintError extends Error {
  name = 'MintError';
}
