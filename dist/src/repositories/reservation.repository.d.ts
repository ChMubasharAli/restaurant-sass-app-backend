import { BaseRepository } from "./base.repository.js";
import type { CreateReservationDTO } from "../dto/reservation.dto";
export declare class ReservationRepository extends BaseRepository {
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.js").ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.js").ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    findByDate(date: Date): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.js").ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }[]>;
    checkAvailability(reservationDate: Date, timeSlot: string): Promise<boolean>;
    create(data: CreateReservationDTO): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.js").ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    updateStatus(id: number, status: string, notes?: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.js").ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }>;
    getReservationStats(): Promise<{
        totalReservations: number;
        byStatus: (import("../../generated/prisma/internal/prismaNamespace.js").PickEnumerable<import("../../generated/prisma/models.js").ReservationGroupByOutputType, "status"[]> & {
            _count: number;
        })[];
        todayReservations: number;
    }>;
    getReservationSchedule(date?: Date): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.js").ReservationStatus;
        customerName: string;
        phoneNumber: string;
        reservationDate: Date;
        timeSlot: string;
        numberOfGuests: number;
        specialRequest: string | null;
        notes: string | null;
    }[]>;
}
//# sourceMappingURL=reservation.repository.d.ts.map