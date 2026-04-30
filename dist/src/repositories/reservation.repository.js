import { BaseRepository } from "./base.repository.js";
export class ReservationRepository extends BaseRepository {
    async findAll() {
        try {
            return await this.prisma.reservation.findMany({
                orderBy: {
                    reservationDate: "asc",
                },
            });
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.findAll");
        }
    }
    async findById(id) {
        try {
            console.log("Finding reservation by ID:", id); // Debug log
            return await this.prisma.reservation.findUnique({
                where: { id },
            });
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.findById");
        }
    }
    async findByDate(date) {
        try {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(date);
            endOfDay.setHours(23, 59, 59, 999);
            return await this.prisma.reservation.findMany({
                where: {
                    reservationDate: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                },
                orderBy: {
                    timeSlot: "asc",
                },
            });
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.findByDate");
        }
    }
    async checkAvailability(reservationDate, timeSlot) {
        try {
            const existingReservation = await this.prisma.reservation.findFirst({
                where: {
                    reservationDate,
                    timeSlot,
                    status: {
                        notIn: ["REJECTED", "CANCELLED"],
                    },
                },
            });
            return !existingReservation; // true if slot is available
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.checkAvailability");
        }
    }
    async create(data) {
        try {
            return await this.prisma.reservation.create({
                data: {
                    reservationDate: new Date(data.reservationDate),
                    timeSlot: data.timeSlot,
                    numberOfGuests: data.numberOfGuests,
                    customerName: data.customerName,
                    phoneNumber: data.phoneNumber,
                    specialRequest: data.specialRequest || null,
                    status: "PENDING",
                },
            });
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.create");
        }
    }
    async updateStatus(id, status, notes) {
        try {
            return await this.prisma.reservation.update({
                where: { id },
                data: {
                    status: status,
                    ...(notes && { notes }),
                },
            });
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.updateStatus");
        }
    }
    async getReservationStats() {
        try {
            const [totalReservations, byStatus, todayReservations] = await Promise.all([
                this.prisma.reservation.count(),
                this.prisma.reservation.groupBy({
                    by: ["status"],
                    _count: true,
                }),
                this.prisma.reservation.count({
                    where: {
                        reservationDate: {
                            gte: new Date(new Date().setHours(0, 0, 0, 0)),
                            lte: new Date(new Date().setHours(23, 59, 59, 999)),
                        },
                    },
                }),
            ]);
            return {
                totalReservations,
                byStatus,
                todayReservations,
            };
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.getReservationStats");
        }
    }
    async getReservationSchedule(date) {
        try {
            const targetDate = date || new Date();
            const startOfDay = new Date(targetDate);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(targetDate);
            endOfDay.setHours(23, 59, 59, 999);
            return await this.prisma.reservation.findMany({
                where: {
                    reservationDate: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                    status: {
                        notIn: ["REJECTED", "CANCELLED"],
                    },
                },
                orderBy: {
                    timeSlot: "asc",
                },
            });
        }
        catch (error) {
            this.handleError(error, "ReservationRepository.getReservationSchedule");
        }
    }
}
//# sourceMappingURL=reservation.repository.js.map