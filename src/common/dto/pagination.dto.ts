import { IsNumber, IsOptional, IsPositive, Min, isPositive } from "class-validator";


export class PaginationDTO {
    
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsNumber()
    @IsPositive()
    offset?: number;
}