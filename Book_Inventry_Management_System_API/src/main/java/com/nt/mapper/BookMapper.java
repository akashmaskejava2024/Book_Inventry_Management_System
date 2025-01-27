package com.nt.mapper;

import org.springframework.stereotype.Component;

import com.nt.dto.BookRequestDTO;
import com.nt.dto.BookResponseDTO;
import com.nt.entity.Book;

@Component
public class BookMapper {

	public Book toEntity(BookRequestDTO dto) {
		
		return new Book(dto.getId(), dto.getImgUrl(),dto.getName(), dto.getAuther(), dto.getPageCount(), dto.getPublishedDate(), dto.getPublisher(),dto.getOverView() ,dto.getEdition(), dto.getLanguage(), dto.getPrice(), null);
	}

	public BookResponseDTO toReponseDTO(Book book) {
		
		return new BookResponseDTO(book.getId(), book.getImgUrl(),book.getName(), book.getAuther(), book.getPageCount(), book.getPublishedDate(), book.getPublisher(), book.getOverView(),book.getEdition(), book.getLanguage(), book.getPrice(), book.getCategory());
	}

}
