import express from "express";
import { authenticate } from "../middleware/auth.js";
import { createTicket, getTicket, getTickets } from "../controllers/tickets.js";

const router = express.Router();

router.get("/", authenticate, getTickets);
router.get("/:id", authenticate, getTicket);
router.post("/", authenticate, createTicket);

export default router;
