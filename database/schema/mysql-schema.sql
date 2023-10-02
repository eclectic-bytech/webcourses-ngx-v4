/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
DROP TABLE IF EXISTS `wngx_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_activities` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'Unique activity ID.',
  `prequestion` mediumtext COLLATE utf8mb4_unicode_ci COMMENT 'Activity content for the pre-question area.',
  `question` mediumtext COLLATE utf8mb4_unicode_ci COMMENT 'Activity content for the question area.',
  `assess_text` mediumtext COLLATE utf8mb4_unicode_ci COMMENT 'Activity content for the assess area.',
  `after_word` mediumtext COLLATE utf8mb4_unicode_ci COMMENT 'Activity content for the after word area, shown after the activity is completed.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `wngx_activities_id_foreign` FOREIGN KEY (`id`) REFERENCES `wngx_course_syllabus` (`activity_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_activity_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_activity_answers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'Unique ID of this answer.',
  `activity_id` int unsigned NOT NULL COMMENT 'Activity ID in which this answer shows up.',
  `slot` tinyint unsigned NOT NULL COMMENT 'Weight of this answer - not yet in use.',
  `caption` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Answer caption for radio and checkbox activities',
  `correct` tinyint unsigned NOT NULL COMMENT 'For radio and checkbox activities, a 0 or 1 for whether this answer is correct or not. For Click activities, the position number (starting 0) of a correct answer, or 999 when a Click activity is solved correctly with no clicks.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_activity_answers_activity_id_foreign` (`activity_id`),
  CONSTRAINT `wngx_activity_answers_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `wngx_activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_activity_bookmarks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_activity_bookmarks` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `aid` int unsigned NOT NULL COMMENT 'Bookmark''s activity id from course_syllabus table',
  `chid` mediumint unsigned NOT NULL COMMENT 'Bookmark''s chapter id from chapters table. Redundant?',
  `pid` int unsigned NOT NULL COMMENT 'Bookmark''s user progress ID from the user_progress table.',
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `generated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `auto` tinyint unsigned NOT NULL DEFAULT '1' COMMENT '1 - auto-created bookmark for last accessed activity. 0 - user created permanent bookmark',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_activity_bookmarks_pid_foreign` (`pid`),
  KEY `wngx_activity_bookmarks_aid_foreign` (`aid`),
  KEY `wngx_activity_bookmarks_chid_foreign` (`chid`),
  CONSTRAINT `wngx_activity_bookmarks_aid_foreign` FOREIGN KEY (`aid`) REFERENCES `wngx_course_syllabus` (`activity_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_activity_bookmarks_chid_foreign` FOREIGN KEY (`chid`) REFERENCES `wngx_chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_activity_bookmarks_pid_foreign` FOREIGN KEY (`pid`) REFERENCES `wngx_user_progress` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_activity_default_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_activity_default_answers` (
  `aid` mediumint unsigned NOT NULL COMMENT 'Activity ID',
  `answer` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Text or data to be used as the default for an active mode activity',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  KEY `wngx_activity_default_answers_aid_index` (`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_activity_defaults`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_activity_defaults` (
  `activity_id` int unsigned NOT NULL COMMENT 'ID of activity which preloads an answer',
  `source` tinyint unsigned NOT NULL COMMENT '1 - Source of default answer is activity_default_answers table; 2 - source is id from user_long_answers',
  `id` int unsigned NOT NULL COMMENT 'Primary id of default answer',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`activity_id`),
  CONSTRAINT `wngx_activity_defaults_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `wngx_activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Stores default answers for activities, primarly text that needs to somehow be edited';
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_activity_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_activity_types` (
  `id` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Machine readable activity type',
  `label` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Human friendly activity type',
  `help` mediumblob COMMENT 'Learner HTML instructions on how to complete the activity, how it is scored, or similar.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_chapters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_chapters` (
  `id` mediumint unsigned NOT NULL COMMENT 'Unique machine chapter ID',
  `label` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Human friend chapter title',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_codes_uses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_codes_uses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `code_id` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'MD5 hash of course access code',
  `user_progress_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_codes_uses_user_progress_id_foreign` (`user_progress_id`),
  KEY `wngx_codes_uses_code_id_foreign` (`code_id`),
  CONSTRAINT `wngx_codes_uses_code_id_foreign` FOREIGN KEY (`code_id`) REFERENCES `wngx_coupons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_codes_uses_user_progress_id_foreign` FOREIGN KEY (`user_progress_id`) REFERENCES `wngx_user_progress` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_coupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_coupons` (
  `id` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'MD5 hash of coupon code',
  `code` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Coupon code',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Unlabelled coupon',
  `active` tinyint unsigned NOT NULL DEFAULT '0',
  `discount` mediumint unsigned NOT NULL COMMENT 'Price discount in smallest unit, eg. cents',
  `cid` bigint unsigned NOT NULL,
  `gid` mediumint unsigned DEFAULT NULL COMMENT 'Add user to this group when code is used',
  `expiry` datetime DEFAULT NULL,
  `uses` smallint unsigned DEFAULT '0',
  `uses_max` smallint unsigned NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_coupons_cid_foreign` (`cid`),
  KEY `wngx_coupons_gid_foreign` (`gid`),
  CONSTRAINT `wngx_coupons_cid_foreign` FOREIGN KEY (`cid`) REFERENCES `wngx_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_coupons_gid_foreign` FOREIGN KEY (`gid`) REFERENCES `wngx_groups` (`gid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_course_syllabus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_course_syllabus` (
  `activity_id` int unsigned NOT NULL AUTO_INCREMENT COMMENT 'Primary activity identifier. ',
  `activity_type` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Defines what type activity this is, per activity_type table',
  `course_id` bigint unsigned NOT NULL COMMENT 'Course ID',
  `build_id` smallint unsigned NOT NULL COMMENT 'Build ID - for now essentially unused.',
  `chapter_id` mediumint unsigned NOT NULL COMMENT 'chapters table reference id.',
  `seq` smallint unsigned NOT NULL COMMENT 'Sequence - defines where in the web course the activity is slotted.',
  `marked` tinyint unsigned NOT NULL DEFAULT '1' COMMENT '1- Multiple option activity will be marked for correct / incorrect answers. 0 just saves choice, marks all selections correct.',
  `cont` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '0 - Load activity on new page, 1 - Load activity without clearing previous from page.',
  `default_answer` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '1 if activity has default text / data that the user somehow needs to modify as part of completing the activity.',
  `style` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `demo` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '0 - this activity is not part of the web course''s free demo. 1 - this activity is.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`activity_id`),
  KEY `wngx_course_syllabus_chapter_id_foreign` (`chapter_id`),
  KEY `wngx_course_syllabus_activity_type_foreign` (`activity_type`),
  KEY `wngx_course_syllabus_course_id_foreign` (`course_id`),
  CONSTRAINT `wngx_course_syllabus_activity_type_foreign` FOREIGN KEY (`activity_type`) REFERENCES `wngx_activity_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_course_syllabus_chapter_id_foreign` FOREIGN KEY (`chapter_id`) REFERENCES `wngx_chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_course_syllabus_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `wngx_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_courses` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT COMMENT 'Unique Web Course ID',
  `active_bid` smallint unsigned NOT NULL,
  `title` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cover` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default/course-cover.jpg',
  `publisher_id` mediumint unsigned NOT NULL COMMENT 'User ID of Publisher (Course Owner)',
  `published` tinyint unsigned NOT NULL DEFAULT '0' COMMENT 'Published flag, where 1 means course is available to students',
  `private` tinyint unsigned NOT NULL DEFAULT '1' COMMENT 'Private courses do not show in any webcourse catalogues',
  `hide_from_main_catalogue` tinyint unsigned NOT NULL DEFAULT '0' COMMENT 'Hide course from main catalogue - show in publisher catalogue only.',
  `completion_time` decimal(5,1) unsigned DEFAULT NULL COMMENT 'Number of hours expected to complete the course. One decimal point of accuracy.',
  `audience` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL' COMMENT 'Target audience that should find the course useful or interesting.',
  `cover_alt` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL' COMMENT 'Text for alt tag of the cover image',
  `short_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL' COMMENT 'Short description of the web course',
  `long_desc` text COLLATE utf8mb4_unicode_ci COMMENT 'Long description of web course',
  `objective` text COLLATE utf8mb4_unicode_ci COMMENT 'Learning objective',
  `eval_type` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL' COMMENT 'Type of answer evaluation, e.g. teacher review, real time',
  `price` mediumint unsigned NOT NULL DEFAULT '0' COMMENT 'Course price. Price of 9999999 means the course cannot be purchased. Only enrollment with code is possible.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_courses_publisher_id_foreign` (`publisher_id`),
  CONSTRAINT `wngx_courses_publisher_id_foreign` FOREIGN KEY (`publisher_id`) REFERENCES `wngx_publishers` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_enrol_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_enrol_messages` (
  `id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `message` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_group_memberships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_group_memberships` (
  `gid` mediumint unsigned NOT NULL,
  `uid` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`gid`,`uid`),
  KEY `wngx_group_memberships_uid_foreign` (`uid`),
  CONSTRAINT `wngx_group_memberships_gid_foreign` FOREIGN KEY (`gid`) REFERENCES `wngx_groups` (`gid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_group_memberships_uid_foreign` FOREIGN KEY (`uid`) REFERENCES `wngx_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_groups` (
  `cid` bigint unsigned NOT NULL COMMENT 'Course ID to which this group is attached.',
  `gid` mediumint unsigned NOT NULL COMMENT 'Group ID',
  `label` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'Group name',
  `enrol_msg_id` mediumint unsigned DEFAULT NULL COMMENT 'ID of enrol message in enrol_messages (displayed after user joins course using a code.)',
  `icon` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL' COMMENT 'Path to group avatar.',
  `desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`gid`,`cid`),
  KEY `wngx_groups_cid_foreign` (`cid`),
  KEY `wngx_groups_enrol_msg_id_foreign` (`enrol_msg_id`),
  CONSTRAINT `wngx_groups_cid_foreign` FOREIGN KEY (`cid`) REFERENCES `wngx_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_groups_enrol_msg_id_foreign` FOREIGN KEY (`enrol_msg_id`) REFERENCES `wngx_enrol_messages` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `wngx_password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_personal_access_tokens_token_unique` (`token`),
  KEY `wngx_personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_publishers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_publishers` (
  `id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `id_alias` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner_uid` bigint unsigned NOT NULL DEFAULT '0' COMMENT 'UID that owns this publisher account.',
  `name` varchar(48) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0' COMMENT 'Publisher Name',
  `website` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL' COMMENT 'Publisher website address',
  `contact_fname` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `contact_lname` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `contact_email` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `contact_phone` varchar(24) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `country` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `province` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `city` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT 'NULL',
  `settings` json NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_publishers_id_alias_unique` (`id_alias`),
  UNIQUE KEY `wngx_publishers_owner_uid_unique` (`owner_uid`),
  CONSTRAINT `wngx_publishers_owner_uid_foreign` FOREIGN KEY (`owner_uid`) REFERENCES `wngx_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_roles` (
  `id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_sales` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `uid` bigint unsigned NOT NULL,
  `service` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cid` bigint unsigned DEFAULT NULL,
  `quantity` smallint unsigned NOT NULL DEFAULT '1',
  `payment_intent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `charge_object` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_sales_uid_foreign` (`uid`),
  KEY `wngx_sales_cid_foreign` (`cid`),
  CONSTRAINT `wngx_sales_cid_foreign` FOREIGN KEY (`cid`) REFERENCES `wngx_courses` (`id`),
  CONSTRAINT `wngx_sales_uid_foreign` FOREIGN KEY (`uid`) REFERENCES `wngx_users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint unsigned DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_sessions_user_id_index` (`user_id`),
  KEY `wngx_sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_subscription_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_subscription_items` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `subscription_id` bigint unsigned NOT NULL,
  `stripe_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_product` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_subscription_items_subscription_id_stripe_price_unique` (`subscription_id`,`stripe_price`),
  UNIQUE KEY `wngx_subscription_items_stripe_id_unique` (`stripe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_subscriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_subscriptions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stripe_price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  `ends_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_subscriptions_stripe_id_unique` (`stripe_id`),
  KEY `wngx_subscriptions_user_id_stripe_status_index` (`user_id`,`stripe_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_team_invitations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_team_invitations` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `team_id` bigint unsigned NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_team_invitations_team_id_email_unique` (`team_id`,`email`),
  CONSTRAINT `wngx_team_invitations_team_id_foreign` FOREIGN KEY (`team_id`) REFERENCES `wngx_teams` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_team_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_team_user` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `team_id` bigint unsigned NOT NULL,
  `user_id` bigint unsigned NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_team_user_team_id_user_id_unique` (`team_id`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_teams` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_team` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_teams_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_user_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_user_answers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `activity_id` int unsigned NOT NULL COMMENT 'The activity id to which this user answer belongs to.',
  `chapter_id` mediumint unsigned NOT NULL COMMENT 'The id of the chapter the answer belongs to. Used for easily generating chapter completion status.',
  `progress_id` int unsigned NOT NULL COMMENT 'User progress ID from the user_progress table.',
  `answer_id` int unsigned NOT NULL COMMENT 'The ID the user chose from activity_answers table. For long-answer questions, this''ll be the id of the entry in _user_long_answers table.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_user_answers_progress_id_foreign` (`progress_id`),
  KEY `wngx_user_answers_activity_id_foreign` (`activity_id`),
  KEY `wngx_user_answers_chapter_id_foreign` (`chapter_id`),
  KEY `wngx_user_answers_answer_id_index` (`answer_id`),
  CONSTRAINT `wngx_user_answers_activity_id_foreign` FOREIGN KEY (`activity_id`) REFERENCES `wngx_course_syllabus` (`activity_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_user_answers_chapter_id_foreign` FOREIGN KEY (`chapter_id`) REFERENCES `wngx_chapters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_user_answers_progress_id_foreign` FOREIGN KEY (`progress_id`) REFERENCES `wngx_user_progress` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_user_long_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_user_long_answers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `answer` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'User input.',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_user_progress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_user_progress` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `course_id` bigint unsigned NOT NULL,
  `build_id` smallint unsigned NOT NULL COMMENT 'Version / build number of the web course the user has joined',
  `selected_aid` int unsigned DEFAULT '0' COMMENT 'Id of last activity loaded.',
  `demo` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_user_progress_course_id_foreign` (`course_id`),
  KEY `wngx_user_progress_user_id_foreign` (`user_id`),
  KEY `wngx_user_progress_selected_aid_foreign` (`selected_aid`),
  CONSTRAINT `wngx_user_progress_course_id_foreign` FOREIGN KEY (`course_id`) REFERENCES `wngx_courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_user_progress_selected_aid_foreign` FOREIGN KEY (`selected_aid`) REFERENCES `wngx_course_syllabus` (`activity_id`),
  CONSTRAINT `wngx_user_progress_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `wngx_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_user_roles` (
  `id` mediumint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint unsigned NOT NULL,
  `role_id` tinyint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `wngx_user_roles_user_id_foreign` (`user_id`),
  KEY `wngx_user_roles_role_id_foreign` (`role_id`),
  CONSTRAINT `wngx_user_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `wngx_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `wngx_user_roles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `wngx_users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
DROP TABLE IF EXISTS `wngx_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wngx_users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(48) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `first_name` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_course_id` bigint unsigned DEFAULT NULL,
  `current_team_id` bigint unsigned DEFAULT NULL,
  `profile_photo_path` text COLLATE utf8mb4_unicode_ci,
  `last_login_ip` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_count` int unsigned DEFAULT '0' COMMENT 'Keeps track of number of times a user logged in',
  `last_login_time` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `stripe_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pm_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pm_last_four` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trial_ends_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wngx_users_email_unique` (`email`),
  KEY `wngx_users_stripe_id_index` (`stripe_id`),
  KEY `wngx_users_current_course_id_foreign` (`current_course_id`),
  CONSTRAINT `wngx_users_current_course_id_foreign` FOREIGN KEY (`current_course_id`) REFERENCES `wngx_courses` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (1,'2014_10_12_000000_create_users_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (2,'2014_10_12_100000_create_password_resets_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (3,'2014_10_12_200000_add_two_factor_columns_to_users_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (4,'2019_05_03_000001_create_customer_columns',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (5,'2019_05_03_000002_create_subscriptions_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (6,'2019_05_03_000003_create_subscription_items_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (7,'2019_08_19_000000_create_failed_jobs_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (8,'2019_12_14_000001_create_personal_access_tokens_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (9,'2020_05_21_100000_create_teams_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (10,'2020_05_21_200000_create_team_user_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (11,'2020_05_21_300000_create_team_invitations_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (12,'2020_07_10_134403_create_activity_types_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (13,'2020_07_21_1595275580_create_publishers_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (14,'2020_07_21_1595285861_create_courses_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (15,'2020_07_21_1595325164_create_chapters_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (16,'2020_07_21_1595326016_create_course_syllabus_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (17,'2020_07_21_1595326017_create_activities_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (18,'2020_07_21_1595329595_create_activity_answers_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (19,'2020_07_21_1595331009_create_activity_defaults_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (20,'2020_07_21_1595332077_create_activity_default_answers_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (21,'2020_07_21_1595338635_create_enrol_messages_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (22,'2020_07_21_1595339384_create_groups_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (23,'2020_07_21_1595340668_create_coupons_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (24,'2020_07_21_1595342876_create_group_memberships_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (25,'2020_07_21_1595348464_create_roles_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (26,'2020_07_21_1595350750_create_user_progress_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (27,'2020_07_21_1595350751_create_user_answers_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (28,'2020_07_21_1595350751_create_user_long_answers_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (29,'2020_07_21_1595353917_create_activity_bookmarks_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (30,'2020_07_22_1595356058_create_user_roles_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (31,'2021_03_03_153207_user_answers_add_index_to_answer_id',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (32,'2021_03_03_184615_user_long_answers_fk_user_answers',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (33,'2021_03_31_121554_create_sessions_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (34,'2021_06_07_151524_add-settings-field-to-publisher-table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (35,'2021_06_28_094637_add_style_field_to_course_syllabus_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (36,'2021_09_22_052017_add_first_last_name_fields',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (37,'2022_10_18_135335_update_name_field_to_username',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (38,'2022_10_19_183116_update_username_collation_to_utf8',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (39,'2022_10_22_151943_add_current_course_id_to_users_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (40,'2022_12_21_162732_expand_user_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (41,'2023_01_26_123036_add_demo_flag_to_course_syllabus',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (42,'2023_02_03_151257_add_hidden_course_column_to_courses_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (43,'2023_02_15_112531_adding_created_at_and_updated_at_to_all_tables_without_them',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (44,'2023_02_25_092152_create_codes_uses_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (45,'2023_02_27_090208_adding_last_login_time_and_last_login_ip_to_user_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (46,'2023_03_03_112243_adding_login_count_to_users_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (47,'2023_03_22_161955_shortening__country__field__on__user__table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (48,'2023_04_17_143617_changing_user_name_length_to_48_characters',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (49,'2023_05_21_110704_add_last_aid_to_user_progress',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (50,'2023_05_21_111524_remove_scoring_fields_from_user_progress',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (51,'2023_05_21_112737_move_user_progress_demo_field_after_selected_aid_field',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (52,'2023_05_21_120236_add_foreign_key_to_user_progress_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (53,'2023_06_24_094843_create_sales_table',1);
INSERT INTO `wngx_migrations` (`id`, `migration`, `batch`) VALUES (54,'2023_07_07_083825_update_sales_table_charge_object_to_nullable',1);
