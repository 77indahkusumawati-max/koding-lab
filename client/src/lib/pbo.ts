// PBO Learning Lab: concrete TypeScript examples for Bab 04–06.

export class User {
  private readonly username: string;
  private role: string;

  constructor(username: string, role = "student") {
    this.username = username;
    this.role = role;
  }

  public getUsername() {
    return this.username;
  }

  public getRole() {
    return this.role;
  }

  public setRole(role: string) {
    this.role = role;
  }
}

export class Admin extends User {
  constructor(username: string) {
    super(username, "admin");
  }

  public getPermissions() {
    return `${this.getUsername()} dapat mengelola materi dan pengguna.`;
  }
}

export abstract class Shape {
  abstract draw(): string;
}

export class Circle extends Shape {
  draw() {
    return "Circle: menggambar lingkaran dengan radius 50px.";
  }
}

export class Rectangle extends Shape {
  draw() {
    return "Rectangle: menggambar persegi panjang 120 × 70px.";
  }
}

export function runEncapsulationDemo(username: string) {
  const user = new User(username || "siswa-koding");
  user.setRole("student");
  return `Object User dibuat. Username: ${user.getUsername()} · Role: ${user.getRole()}`;
}

export function runInheritanceDemo(username: string) {
  const admin = new Admin(username || "admin-koding");
  return `Object Admin mewarisi User. ${admin.getPermissions()}`;
}

export function runPolymorphismDemo(shape: "circle" | "rectangle") {
  const selectedShape: Shape = shape === "circle" ? new Circle() : new Rectangle();
  return selectedShape.draw();
}
