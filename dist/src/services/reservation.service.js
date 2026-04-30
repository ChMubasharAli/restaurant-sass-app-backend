import { ReservationRepository } from "../repositories/reservation.repository.js";
import {
  NotFoundError,
  ValidationError,
  ConflictError,
} from "../utils/errors.js";
import { ReservationStatus } from "../../generated/prisma/enums";
export class ReservationService {
  reservationRepository;
  constructor() {
    this.reservationRepository = new ReservationRepository();
  }
  async createReservation(data) {
    // Check if the time slot is available
    const isAvailable = await this.reservationRepository.checkAvailability(
      new Date(data.reservationDate),
      data.timeSlot,
    );
    if (!isAvailable) {
      throw new ConflictError(
        "This time slot is already reserved. Please choose another time.",
      );
    }
    // Validate reservation date is in the future
    const reservationDate = new Date(data.reservationDate);
    if (reservationDate < new Date()) {
      throw new ValidationError("Reservation date must be in the future");
    }
    return this.reservationRepository.create(data);
  }
  async getAllReservations() {
    return this.reservationRepository.findAll();
  }
  async getReservationById(id) {
    const reservation = await this.reservationRepository.findById(id);
    if (!reservation) {
      throw new NotFoundError("Reservation not found");
    }
    return reservation;
  }
  async getReservationsByDate(date) {
    return this.reservationRepository.findByDate(new Date(date));
  }
  async acceptReservation(id) {
    const reservation = await this.getReservationById(id);
    if (reservation.status !== "PENDING") {
      throw new ValidationError("Only pending reservations can be accepted");
    }
    return this.reservationRepository.updateStatus(id, "ACCEPTED");
  }
  async rejectReservation(id, reason) {
    const reservation = await this.getReservationById(id);
    if (reservation.status === "CANCELLED") {
      throw new ValidationError("Cannot reject a cancelled reservation");
    }
    const notes = reason || "Reservation rejected by restaurant";
    return this.reservationRepository.updateStatus(id, "REJECTED", notes);
  }
  async cancelReservation(id) {
    const reservation = await this.getReservationById(id);
    if (reservation.status === ReservationStatus.ACCEPTED) {
      throw new ValidationError("Cannot cancel a completed reservation");
    }
    const reservation_date = await this.reservationRepository.updateStatus(
      id,
      "CANCELLED",
      "Cancelled - slot now available",
    );
    return reservation_date;
    // Cancelled slots become available again automatically
    // because our availability check excludes CANCELLED and REJECTED statuses
  }
  async getReservationSchedule(date) {
    return this.reservationRepository.getReservationSchedule(
      date ? new Date(date) : undefined,
    );
  }
  async getReservationStats() {
    return this.reservationRepository.getReservationStats();
  }
  async checkSlotAvailability(date, timeSlot) {
    const isAvailable = await this.reservationRepository.checkAvailability(
      new Date(date),
      timeSlot,
    );
    return {
      date,
      timeSlot,
      available: isAvailable,
    };
  }
}
//# sourceMappingURL=reservation.service.js.map
