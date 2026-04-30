import type { CreateReservationDTO } from "../dto/reservation.dto.js";
import { ReservationStatus } from "../../generated/prisma/enums.js";
export declare class ReservationService {
    private reservationRepository;
    constructor();
    createReservation(data: CreateReservationDTO): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    getAllReservations(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }[]>;
    getReservationById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    getReservationsByDate(date: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }[]>;
    acceptReservation(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    rejectReservation(id: number, reason?: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    cancelReservation(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    getReservationSchedule(date?: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }[]>;
    getReservationStats(): Promise<{
        totalReservations: number;
        byStatus: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").ReservationGroupByOutputType, "status"[]> & {
            _count: number;
        })[];
        todayReservations: number;
    }>;
    checkSlotAvailability(date: string, timeSlot: string): Promise<{
        date: string;
        timeSlot: string;
        available: boolean;
    }>;
}
//# sourceMappingURL=reservation.service.d.ts.map