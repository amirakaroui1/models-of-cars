-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema modelsofcars
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema modelsofcars
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `modelsofcars` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `modelsofcars` ;

-- -----------------------------------------------------
-- Table `modelsofcars`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `modelsofcars`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `imageUrl` VARCHAR(255) NULL DEFAULT NULL,
  `num_model` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `categorie` VARCHAR(255) NULL DEFAULT NULL,
  `avg_price` FLOAT NULL DEFAULT NULL,
  `avg_horsepower` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX ` name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `modelsofcars`.`purchases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `modelsofcars`.`purchases` (
  `idpurchases` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idpurchases`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `modelsofcars`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `modelsofcars`.`users` (
  ` iduser` INT NOT NULL AUTO_INCREMENT,
  ` name` VARCHAR(255) NULL DEFAULT NULL,
  ` email` VARCHAR(255) NULL DEFAULT NULL,
  ` address` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (` iduser`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
