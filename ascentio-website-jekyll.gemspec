# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "ascentio-website"
  spec.version       = "1.0.0"
  spec.authors       = ["Daan van Hulst"]
  spec.email         = ["daan.van.hulst@ascentio.nl"]

  spec.summary       = "Custom theme for Ascentio website"
  spec.homepage      = "http://ascentio.nl"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }

  spec.add_development_dependency "jekyll", "~> 3.2"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
