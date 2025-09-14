/*
  Warnings:

  - The values [SUPER_ADMIN,ADMIN,OPERATOR] on the enum `admin_role` will be removed. If these variants are still used in the database, this will fail.
  - The values [VISUAL,HEARING,PHYSICAL,LEARNING,OTHER] on the enum `disability` will be removed. If these variants are still used in the database, this will fail.
  - The values [UPCOMING,REGISTRATION_OPEN,REGISTRATION_CLOSED,IN_PROGRESS,COMPLETED,CANCELLED] on the enum `exam_session_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE] on the enum `gender` will be removed. If these variants are still used in the database, this will fail.
  - The values [PENDING,SUBMITTED,VERIFIED,REJECTED,CANCELLED] on the enum `registration_status` will be removed. If these variants are still used in the database, this will fail.
  - The values [SECONDARY,SEMINARY] on the enum `school_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."admin_role_new" AS ENUM ('Super_Admin', 'Admin', 'Operator');
ALTER TABLE "public"."admin_users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "public"."admin_users" ALTER COLUMN "role" TYPE "public"."admin_role_new" USING ("role"::text::"public"."admin_role_new");
ALTER TYPE "public"."admin_role" RENAME TO "admin_role_old";
ALTER TYPE "public"."admin_role_new" RENAME TO "admin_role";
DROP TYPE "public"."admin_role_old";
ALTER TABLE "public"."admin_users" ALTER COLUMN "role" SET DEFAULT 'Admin';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."disability_new" AS ENUM ('None', 'Visual', 'Hearing', 'Physical', 'Learning', 'Other');
ALTER TABLE "public"."candidates" ALTER COLUMN "disability" TYPE "public"."disability_new" USING ("disability"::text::"public"."disability_new");
ALTER TYPE "public"."disability" RENAME TO "disability_old";
ALTER TYPE "public"."disability_new" RENAME TO "disability";
DROP TYPE "public"."disability_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."exam_session_status_new" AS ENUM ('Upcoming', 'Registration_Open', 'Registration_Closed', 'In_Progress', 'Completed', 'Cancelled');
ALTER TABLE "public"."exam_sessions" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "public"."exam_sessions" ALTER COLUMN "status" TYPE "public"."exam_session_status_new" USING ("status"::text::"public"."exam_session_status_new");
ALTER TYPE "public"."exam_session_status" RENAME TO "exam_session_status_old";
ALTER TYPE "public"."exam_session_status_new" RENAME TO "exam_session_status";
DROP TYPE "public"."exam_session_status_old";
ALTER TABLE "public"."exam_sessions" ALTER COLUMN "status" SET DEFAULT 'Upcoming';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."gender_new" AS ENUM ('Male', 'Female');
ALTER TABLE "public"."candidates" ALTER COLUMN "gender" TYPE "public"."gender_new" USING ("gender"::text::"public"."gender_new");
ALTER TYPE "public"."gender" RENAME TO "gender_old";
ALTER TYPE "public"."gender_new" RENAME TO "gender";
DROP TYPE "public"."gender_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."registration_status_new" AS ENUM ('Pending', 'Submitted', 'Verified', 'Rejected', 'Cancelled');
ALTER TABLE "public"."candidates" ALTER COLUMN "registrationStatus" DROP DEFAULT;
ALTER TABLE "public"."candidates" ALTER COLUMN "registrationStatus" TYPE "public"."registration_status_new" USING ("registrationStatus"::text::"public"."registration_status_new");
ALTER TYPE "public"."registration_status" RENAME TO "registration_status_old";
ALTER TYPE "public"."registration_status_new" RENAME TO "registration_status";
DROP TYPE "public"."registration_status_old";
ALTER TABLE "public"."candidates" ALTER COLUMN "registrationStatus" SET DEFAULT 'Pending';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "public"."school_type_new" AS ENUM ('Secondary', 'Seminary');
ALTER TABLE "public"."schools" ALTER COLUMN "schoolType" TYPE "public"."school_type_new" USING ("schoolType"::text::"public"."school_type_new");
ALTER TYPE "public"."school_type" RENAME TO "school_type_old";
ALTER TYPE "public"."school_type_new" RENAME TO "school_type";
DROP TYPE "public"."school_type_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."admin_users" ALTER COLUMN "role" SET DEFAULT 'Admin';

-- AlterTable
ALTER TABLE "public"."candidates" ALTER COLUMN "registrationStatus" SET DEFAULT 'Pending';

-- AlterTable
ALTER TABLE "public"."exam_sessions" ALTER COLUMN "status" SET DEFAULT 'Upcoming';
