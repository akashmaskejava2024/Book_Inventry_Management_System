package com.nt.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookRequestDTO {

	private int id;
	private String imgUrl;
	private String name;
	private String auther;
	private int pageCount;
	private String edition;
	private String language;
	private int price;
	private int category_id;
	
}
