import StructureNode from "@/models/Node";

export function isValidPostfixStack(list: StructureNode[]): boolean {
  const operators = new Set(["+", "-", "/", "*"]);
  const stack: number[] = [];
  const ndList = [...list];

  for (const item of ndList.reverse()) {
    if (typeof item.value === "number") {
      stack.push(item.value);
    } else if (typeof item.value === "string" && operators.has(item.value)) {
      if (stack.length < 2) {
        return false;
      }

      stack.pop();
      stack.pop();
      stack.push(1);
    } else {
      return false;
    }
  }

  return stack.length === 1;
}

export function evaluatePostfix(list: StructureNode[]): number {
  const operators = new Set(["+", "-", "/", "*"]);
  const stack: number[] = [];
  const ndList = [...list];
  for (const item of ndList.reverse()) {
    if (typeof item.value === "number") {
      stack.push(item.value);
    } else if (typeof item.value === "string" && operators.has(item.value)) {
      switch (item.value) {
        case "+":
          stack.push(stack.pop()! + stack.pop()!);
          break;
        case "-":
          stack.push(stack.pop()! - stack.pop()!);
          break;
        case "*":
          stack.push(stack.pop()! * stack.pop()!);
          break;
        case "/":
          stack.push(stack.pop()! / stack.pop()!);
          break;
      }
    }
  }
  return stack[0];
}
