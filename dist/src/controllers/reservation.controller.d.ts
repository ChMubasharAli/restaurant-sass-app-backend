import type { Request, Response } from "express";
export declare class ReservationController {
    private reservationService;
    constructor();
    createReservation: (req: Request, res: Response) => Promise<void>;
    getAllReservations: (req: Request, res: Response) => Promise<void>;
    getReservationById: (req: Request, res: Response) => Promise<void>;
    acceptReservation: (req: Request, res: Response) => Promise<void>;
    rejectReservation: (req: Request, res: Response) => Promise<void>;
    cancelReservation: (req: Request, res: Response) => Promise<void>;
    getReservationSchedule: (req: Request, res: Response) => Promise<void>;
    getReservationStats: (req: Request, res: Response) => Promise<void>;
    checkAvailability: (req: Request, res: Response) => Promise<void>;
    getTimeSlots: (req: Request, res: Response) => Promise<void>;
}
//# sourceMappingURL=reservation.controller.d.ts.map