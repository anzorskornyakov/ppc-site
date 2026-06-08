# Backups

## `ppc.space-dns.zone`

A BIND-format export of the **ppc.space** DNS zone as managed in Cloudflare
(nameservers: `melnicoff.ns.cloudflare.com`, `paris.ns.cloudflare.com`).

It captures everything that isn't in this repo: the Microsoft 365 email setup
(MX, SPF, DMARC, autodiscover/SIP CNAMEs) and the worker custom-domain records
for `ppc.space` / `www.ppc.space`.

**To refresh it** (run from the repo root, with a Cloudflare API token that has
Zone → DNS → Read on this zone):

```bash
ZID=9dfcef95e456ee7eac74e1e695941b5f   # ppc.space zone id
curl -s "https://api.cloudflare.com/client/v4/zones/$ZID/dns_records/export" \
  -H "Authorization: Bearer <CF_TOKEN>" -o backups/ppc.space-dns.zone
```

**To restore** (if the zone is ever lost/recreated): Cloudflare dashboard →
ppc.space → DNS → Records → **Import and Export** → **Import** → upload this
file. (The worker custom-domain records re-create themselves on the next
deploy; email/verification records come from this file.)

> The site itself (code + media) is versioned in this repo — `git` history is
> the source of truth and Cloudflare rebuilds prod from `main` on every push.
