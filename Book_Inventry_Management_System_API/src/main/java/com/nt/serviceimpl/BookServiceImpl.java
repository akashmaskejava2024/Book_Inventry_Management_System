package com.nt.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.nt.dto.BookRequestDTO;
import com.nt.dto.BookResponseDTO;
import com.nt.entity.Book;
import com.nt.entity.Category;
import com.nt.mapper.BookMapper;
import com.nt.repository.BookRepository;
import com.nt.service.BookService;
import com.nt.service.CategoryService;

@Service
public class BookServiceImpl implements BookService {

	@Autowired
	private BookRepository bookRepository;

	@Autowired
	private BookMapper bookMapper;

	@Autowired
	private CategoryService categoryService;

	@Override
	public BookResponseDTO addNewBook(BookRequestDTO dto) {

		Category category = categoryService.getById(dto.getCategory_id());
		Book book = bookMapper.toEntity(dto);
		book.setCategory(category);

		return bookMapper.toReponseDTO(bookRepository.save(book));

	}

	@Override
	public BookResponseDTO updateBook(BookRequestDTO dto) {

		Category category = categoryService.getById(dto.getCategory_id());
		Book book = bookMapper.toEntity(dto);
		book.setCategory(category);

		return bookMapper.toReponseDTO(bookRepository.save(book));

	}

	@Override
	public List<BookResponseDTO> getALlBooks() {

		Iterable<Book> list = bookRepository.findAll();
		List<BookResponseDTO> bookList = new ArrayList<>();

		for (Book b : list) {
			bookList.add(bookMapper.toReponseDTO(b));
		}

		return bookList;

	}

	@Override
	public List<BookResponseDTO> addAllBook(List<BookRequestDTO> listDto) {

		List<Book> booklist = new ArrayList<>();
		for (BookRequestDTO dto : listDto) {
			booklist.add(bookMapper.toEntity(dto));

		}

		Iterable<Book> iterBook = bookRepository.saveAll(booklist);
		List<BookResponseDTO> resDtoList = new ArrayList<>();
		for (Book b : iterBook) {
			resDtoList.add(bookMapper.toReponseDTO(b));

		}

		return resDtoList;
	}

	@Override
	public BookResponseDTO deleteBook(int id) {
		
		Book book = getById(id);
		
		bookRepository.deleteById(id);
		return bookMapper.toReponseDTO(book);
		
	}

	@Override
	public Book getById(int id) {

		Optional<Book> opt = bookRepository.findById(id);
		if (opt.isPresent()) {
			return opt.get();
		}
		return null;
	}

}
