import express from 'express'
import { body, validationResult } from 'express-validator'
import User from '../models/schema/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from '../utils/auth'
import UserPage from '../models/schema/userPage';

