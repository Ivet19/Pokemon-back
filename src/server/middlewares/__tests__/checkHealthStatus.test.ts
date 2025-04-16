import { Request, Response } from "express";
import { checkHealthStatus } from "../checkHealthStatus.js";

describe("Given the checkHealthStatus middleware", () => {
  describe("When it receieves a response", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as Pick<Response, "status" | "json">;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("Then it shlould call the response's method status with 200", () => {
      const expectedStatusCode = 200;

      checkHealthStatus(req, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's method json with message 'pong 🏓'", () => {
      const expectedMessage = { message: "pong 🏓" };

      checkHealthStatus(req, res as Response);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
