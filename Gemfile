source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

####
# Welcome to your project's Gemfile, used by Rubygems & Bundler.
#
# To install a plugin, run:
#
#   bundle add new-plugin-name
#
# and add a relevant init comment to your config/initializers.rb file.
#
# When you run Bridgetown commands, we recommend using a binstub like so:
#
#   bin/bridgetown start (or console, etc.)
#
# This will help ensure the proper Bridgetown version is running.
####

# If you need to upgrade/switch Bridgetown versions, change the line below
# and then run `bundle update bridgetown`
gem "bridgetown", "~> 2.0.4"

# Uncomment to add file-based dynamic routing to your project:
# gem "bridgetown-routes", "~> 2.0.2"

# Only use Puma locally during development (the static site doesn’t need it in production)
group :development do
  gem "puma"
end

# Uncomment to use the Inspectors API to manipulate the output
# of your HTML or XML resources:
# gem "nokogiri", "~> 1.13"

# Or for faster parsing of HTML-only resources via Inspectors, use Nokolexbor:
# gem "nokolexbor", "~> 0.5"

gem "bridgetown-feed", "~> 4.0"
