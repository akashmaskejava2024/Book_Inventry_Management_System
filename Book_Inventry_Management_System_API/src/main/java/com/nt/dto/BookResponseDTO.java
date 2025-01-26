package com.nt.dto;

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
	private String edition;
	private String language;
	private int price;
	private Category category;
	
}
