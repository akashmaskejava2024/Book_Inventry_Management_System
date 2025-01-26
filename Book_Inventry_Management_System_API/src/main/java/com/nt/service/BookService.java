package com.nt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nt.dto.BookRequestDTO;
import com.nt.dto.BookResponseDTO;
import com.nt.entity.Book;

@Service
public interface BookService {

	BookResponseDTO addNewBook(BookRequestDTO dto);

	BookResponseDTO updateBook(BookRequestDTO dto);

	List<BookResponseDTO> getALlBooks();

	List<BookResponseDTO> addAllBook(List<BookRequestDTO> listDto);

	BookResponseDTO deleteBook(int id);
	Book getById(int id);

}
