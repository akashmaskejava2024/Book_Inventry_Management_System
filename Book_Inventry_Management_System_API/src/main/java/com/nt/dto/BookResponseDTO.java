package com.nt.dto;

import java.time.LocalDate;
import java.util.Date;

import com.nt.entity.Category;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor


public class BookResponseDTO {

	private int  id;
	private String imgUrl;
	private String name;
	private String auther;
	private int pageCount;
	private LocalDate publishedDate;
	private String publisher;
	public String overView;
	private String edition;
	private String language;
	private int price;
	private Category category;
	
}
