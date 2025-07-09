# GitHub Copilot Instructions

This is an Academic Pages Jekyll site - a template for academic personal websites hosted on GitHub Pages.

## Architecture Overview

**Jekyll Collections Structure**: The site uses Jekyll collections for content organization:
- `_publications/` - Academic papers with frontmatter fields: `title`, `collection`, `category`, `permalink`, `excerpt`, `date`, `venue`, `paperurl`, `citation`
- `_talks/` - Conference presentations and talks
- `_teaching/` - Course and teaching materials
- `_portfolio/` - Project portfolios
- `_pages/` - Static pages (about, CV, research, etc.)

**Configuration**: `_config.yml` defines collection settings, site metadata, author profile, and Jekyll defaults. The `publication_category` section categorizes papers (books, manuscripts, conferences).

**Theme Architecture**: Based on Minimal Mistakes theme with custom layouts:
- `_layouts/single.html` - Main content template with conditional citation/download links
- `_includes/author-profile.html` - Sidebar profile (controlled by `_config.yml` author section)
- `_data/navigation.yml` - Site navigation menu

## Content Management Patterns

**Publication Workflow**: Add papers to `_publications/` using this frontmatter pattern:
```yaml
title: "Paper Title"
collection: publications
category: conferences  # or manuscripts, books
permalink: /publication/YYYY-MM-DD-slug
excerpt: 'Brief description'
date: YYYY-MM-DD
venue: 'Journal/Conference Name'
paperurl: 'http://example.com/paper.pdf'
citation: 'Author. (Year). "Title." <i>Venue</i>.'
```

**File Storage**: Static files (PDFs, images) go in `files/` directory, accessible at `/files/filename.pdf`

**Automation**: `markdown_generator/` contains Python scripts and Jupyter notebooks to bulk-generate publication/talk pages from TSV files. Run `publications.py` or `publications.ipynb` to convert `publications.tsv` to individual markdown files.

## Development Workflow

**Local Development**: 
- `bundle install` - Install Ruby dependencies
- `jekyll serve -l -H localhost` - Serve locally with live reload on port 4000
- `npm run build:js` - Minify JavaScript assets

**Docker Alternative**: `docker build -t jekyll-site . && docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site`

**Deployment**: Automatic via GitHub Actions (`/.github/workflows/jekyll.yml`) on pushes to master branch

## Site Customization

**Author Profile**: Edit `_config.yml` author section for sidebar content, social links, and bio
**Navigation**: Modify `_data/navigation.yml` to add/remove menu items
**Styling**: SCSS files in `_sass/` directory, main styles in `_sass/_variables.scss`

## Special Features

**TalkMap**: `talkmap.py` generates interactive map from talk locations using geopy/Nominatim geocoding
**Publication Categories**: Automatic categorization via `publication_category` in `_config.yml`
**Citation Formatting**: `_layouts/single.html` automatically displays citations and download links for publications

## GitHub Pages Compatibility

Uses `github-pages` gem for compatibility. Avoid plugins not whitelisted by GitHub Pages. The site excludes development files (`.github`, `node_modules`, etc.) via `_config.yml` exclude list.
