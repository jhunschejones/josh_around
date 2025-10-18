require "active_support/all"

class Builders::TimeHelpers < SiteBuilder
  def build
    helper :local_time do |opts|
      zone = site.config["timezone"] || "UTC"
      t = Time.now.in_time_zone(zone)
      opts[:format] ? t.strftime(opts[:format]) : t
    end
  end
end
