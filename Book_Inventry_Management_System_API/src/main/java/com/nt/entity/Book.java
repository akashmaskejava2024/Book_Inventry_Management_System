package com.nt.entity;

import java.util.Date;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "book")
@Data
@AllArgsConstructor
@NoArgsConstructor


public class Book {
	
	@Id
	@GeneratedValue(strategy =  GenerationType.AUTO)
	private int  id;
	private String imgUrl;
	private String name;
	private String auther;
	private int pageCount;
	private Date publishedDate;
	private String publisher;
	public String overView;
	private String edition;
	private String language;
	private int price;
	
	
	@ManyToOne
	@JoinColumn(name =  "category_id")
	private Category category;
	
	
	
	

}
