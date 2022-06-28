function unique(value, index, self) {
  return self.indexOf(value) === index;
}

function isPieceActive(piece) {
  return piece.get("isActive");
}

export { unique, isPieceActive };
